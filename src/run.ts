import { Telegraf } from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context'
import { throws } from 'assert'

interface Word {
    word: string
    description?: string
    examples?: string[]
}

interface BotUser {
    userId: number
    
    addWord(word: Word): Promise<void>
    getWords(): Promise<Word[]>
}

interface BotDatabase {
    getUser(userId: number): Promise<BotUser | undefined>,
    createUser(userId: number): Promise<BotUser>,
}


class MemoryBotUser implements BotUser {
    userId: number
    private words: Word[]

    constructor(userId: number) {
        this.userId = userId
        this.words = []
    }

    async addWord(word: Word): Promise<void> {
        this.words.push(word)
    }

    async getWords(): Promise<Word[]> {
        return this.words
    }
    
}

class MemoryDatabase implements BotDatabase {
    
    users: MemoryBotUser[]

    constructor() {
        this.users = []
    }

    async getUser(userId: number): Promise<BotUser | undefined> {
        return this.users.find(user => user.userId == userId)
    }
    async createUser(userId: number): Promise<BotUser> {
        const user = new MemoryBotUser(userId)
        this.users.push(user)
        return user
    }
}

const messageHandler = (database: BotDatabase) => async (ctx: TelegrafContext) => {
    // parse the message and add the word to the database

    if (ctx.message?.from && ctx.message?.text) {
        let user = await database.getUser(ctx.message.from.id)

        if(!user) 
            user = await database.createUser(ctx.message.from.id)
        
        await user.addWord({word: ctx.message.text})
        const new_words = await user.getWords()

        await ctx.reply(`${ctx.message.from.username} added ${ctx.message.text}`)
        await ctx.reply(`His words are ${new_words.map(w => w.word).join(', ')}`)
    }
}

async function main() {

    if (!process.env.BOT_TOKEN) {
        console.error('Missing BOT_TOKEN')
        return
    }

    const database: BotDatabase = new MemoryDatabase()
    const bot = new Telegraf(process.env.BOT_TOKEN)

    // bot.start(async (ctx) => await ctx.reply('Welcome!'))
    // bot.help(async (ctx) => await ctx.reply('Send me a sticker'))
    // bot.on('sticker', async (ctx) => await ctx.reply('👍'))
    // bot.hears('hi', ctx => ctx.reply('sasi'))
    // bot.on('sticker', async (ctx) => await ctx.reply('👍'))
    bot.on('message', messageHandler(database))

    console.log('Starting the bot...')

    await bot.launch()

    console.log('Started...')
}

main()