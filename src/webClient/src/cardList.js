import React, {useState, useEffect} from 'react';
import AddExample from './AddExample';
import axios from 'axios';
import ExampleList from './ExampletList';

export default () => {
  const [cards, setCards] = useState({}); // 고유 아이디를 가진 객체들을 담는다
  const fetchCards = async () => {
    const res = await axios.get('');

    setCards(res.data);
  };
  // const cardList = document.getElementsByClassName('cardList');

  // const card = document.getElementsByClassName('card');
  // cardList += card;

  useEffect(() => {
    fetchCards();
  }, []);

  const renderedCards = Object.values(cards).map(card => {
    return ( 
    <div className = "cardBox"
      style = {{ width: '22%',marginBottom: '25px'}} key = {card.id}>

      <div className = "cardBody" >
      <h3> {card.word} </h3> 
      <ExampleList cardId={card.id} />
      <AddExample cardId = {card.id}/> 
      </div>
      </div>
    );
  });
  return<>
   <div className = "d-flex flex-row flex-wrap justify-content-between" > 
  {/* {renderedCards}  */}</div>
  

  <section class="cardList">

      <dl class="card">
        {/* <ol>
          <li></li><li></li><li></li> 
          {/* 중요,편집,삭제버튼  </ol> */ }


        {/* 형태예시 */}
        {/* 단어 */}
        <dt class="word">diligence</dt>
        <dd>
          <ol>
            {/* 발음 /듣기*/}
            <li><p class="trans">/ˈdɪlɪdʒ(ə)ns/</p></li>
            {/* 뜻 */}
            <li><p class="meaning">careful and persistent work or effort.</p>
            </li>
            <li>
              <ul class="exList">
              {/* 예문은 단어카드 생성후 작성 */}
                <li><p>example1</p></li>
                <li><p>example1</p></li>
                <li><p>example1</p></li>
                <li><p>example1</p></li>
              </ul>
            </li>
            {/* 태그는 단어카드 생성후 추가 */}
            <li class="tags">
              <p>tag1</p><p>tag2</p> <p>tag1</p><p>tag2</p>
            </li>
          </ol>
        </dd>

      </dl>


      <dl class="card">
        {/* <ol>
          <li></li><li></li><li></li> 
          {/* 중요,편집,삭제버튼  </ol> */ }


        {/* 형태예시 */}
        {/* 단어 */}
        <dt class="word">diligence</dt>
        <dd>
          <ol>
            {/* 발음 /듣기*/}
            <li><p class="trans">/ˈdɪlɪdʒ(ə)ns/</p></li>
            {/* 뜻 */}
            <li class="meaning"><p >careful and persistent work or effort.</p><p >careful and persistent work or effort.</p></li>
            <li>
              <ul class="exList">
              {/* 예문은 단어카드 생성후 작성 */}
                <li><p>example1</p></li>
                <li><p>example1</p></li>
              </ul>
            </li>
            {/* 태그는 단어카드 생성후 추가 */}
            <li class="tags">
              <p>tag1</p><p>tag2</p>
            </li>
          </ol>
        </dd>

      </dl>


      <dl class="card">
        {/* <ol>
          <li></li><li></li><li></li> 
          {/* 중요,편집,삭제버튼  </ol> */ }


        {/* 형태예시 */}
        {/* 단어 */}
        <dt class="word">diligence</dt>
        <dd>
          <ol>
            {/* 발음 /듣기*/}
            <li><p class="trans">/ˈdɪlɪdʒ(ə)ns/</p></li>
            {/* 뜻 */}
            <li><p class="meaning">careful and persistent work or effort.</p></li>
            <li>
              <ul class="exList">
              {/* 예문은 단어카드 생성후 작성 */}
                <li><p>example1</p></li>
              </ul>
            </li>
            <li><p class="meaning">careful and persistent work or effort.</p></li>
            <li>
              <ul class="exList">
              {/* 예문은 단어카드 생성후 작성 */}
                <li><p>example1</p></li>
                <li><p>example1</p></li>
              </ul>
            </li>
            {/* 태그는 단어카드 생성후 추가 */}
            <li class="tags">
              <p>tag1</p><p>tag2</p>
            </li>
          </ol>
        </dd>

      </dl>

    </section></>
  
}