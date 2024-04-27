import React from "react";

const SettingsPage = async () => {
  return ( 
    <div className="container mx-auto py-8 flex flex-col items-center">
      <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="text-3xl mb-4" style={{ fontWeight: 300 }}>About Us</h1>
        <div className="max-w-md">
          <p className="text-base leading-relaxed mb-4" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            Genius is one of the best AI solutions that provides all AI generations in one website. We offer our customers the best selection of Image Generation, Audio Generation, Video Generation, Chatbot, and Code Generation connected with an extremely low price.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            We are a startup company that provides a lot of AI services online
          </p>
        </div>
      </div>
      <div className="container mx-auto py-8 flex flex-col items-center">
        <h1 className="text-3xl mb-4" style={{ fontWeight: 300 }}>Terms Of Service</h1>
        <div className="max-w-md">
          <p className="text-base leading-relaxed" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            If you wanted to get more AI generations after the left down bar is telling you to subscribe you should pay to get more AI generations, If you subscribed for 4.99$ you will get 15 AI generations,The subscriber will get an email in about 24 hours, telling him/her that describes the number of this free generations and telling him he is allowed to use the generations that he paid for
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            If you want to pay more for to get more AI generations you can tell us by the chat button on the down right corner,And you will receive a response within 24 hours
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'rgb(138 107 120)', marginTop: '70px', marginLeft: '10px' }}>
            If You Want To Call Us This Is Our Number

            01200587217
            Or By Email 
            youssefelkoumi512@gmail.com
          </p>


        </div>
      </div>
      </div>
  );
}

export default SettingsPage;
