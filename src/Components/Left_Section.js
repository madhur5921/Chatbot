import React from 'react'
import Userlogo from '../images/user.png';
import Paytmlogo2 from '../images/paytmlogo2.png';
import '../Styles/Left_Section.css';

const Left_Section = () => {
     
    const allchats = [
        {
            id: 1,
            chatname: "Sample chat 1"
        }, 
        {
            id: 2,
            chatname: "Sample chat 2"
        }, 
        {
            id: 3,
            chatname: "Sample chat 3"
        }, 
        {
            id: 4,
            chatname: "Sample chat 4"
        }, 
        {
            id: 5,
            chatname: "Sample chat 5"
        }
    ];
  return (
    <div className="leftsection">

        <div className='heading'>
        <img src={Paytmlogo2} alt="Paytm" height={60} width={150}/>  
        </div>

        {/* heading & new chat option */}
      <div className='newchat1'>
        
        <div>
          
         <button className="button">New Chat
        

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
        </button>
        </div>

      </div>
    
        {/* chats user search earlier */}
      <div className="allchats"></div>

      {allchats.map(chat => (
        <div key = {chat.id} className='chat'>
            <p className='text1'>{chat.chatname}</p>
        </div>
      ))}

      {/* user section */}
      <div className="newchat">

        <div>
        <img src={Userlogo} alt="User" width= {50} height= {50}/>
      <p className='text1'>Paytm User</p>
        </div>

      </div>
    </div>
  );
}

export default Left_Section
