import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { addText } from '../redux/slices/textSlice';

const Home = () => {
    const dispatch = useDispatch()
    const {id}=useSelector((state)=>state.counter)
    const [inputText,setInputText]=useState({})
    const [translateText,setTranslateText]=useState([])
    const [roverspraket,setRoverspraket]=useState('')
   

    
    const handleInput=e=>{
        const value=e.target.value;
        const field=e.target.name
        const newInput={...inputText}
        newInput[field]=value
        setInputText(newInput)
    }
    const translate=data=>{
        
        fetch('https://lit-reaches-68954.herokuapp.com/normal', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Added to Database')
                //    setId(result.insertedId)
                   dispatch(addText(result.insertedId))
                 
              
                  
                }
                
              
            })

             

    }
    // console.log(translateText)
//  console.log(id)
// const filter=translateText.find(rst=>rst._id===id)
                
// console.log(filter)

//     useEffect(() => {
//         fetch(`http://localhost:5000/normal`)
//             .then(res => res.json())
//             .then(data => setTranslateText(data))
//     }, [])

                

  

// if(inputText.english){
//     // console.log(translateText.english)
//     let res=''
//     for(let i = 0; i <inputText.english.length; i++)
//     {    console.log(inputText.english)
//         // checking if character is vowel,
       
//         if (inputText.english.charAt(i) === 'a' || inputText.english.charAt(i)=== 'e' ||
//         inputText.english.charAt(i) === 'i' || inputText.english.charAt(i) === 'o' ||
//         inputText.english.charAt(i) === 'u')
//         {
//             res = res +inputText.english.charAt(i);
//         }
         
//         // if space then append as it is
//         else if(inputText.english.charAt(i) === ' ')
//         {
//             res = res +inputText.english.charAt(i);
//         }
         
//         // else double the consonant and
//         // put o in between
//         else
//         {
//             res = res + inputText.english.charAt(i) + 'o' +inputText.english.charAt(i);
//         }
//     }
     
//     // return translated String
//     setRoverspraket(res)
// }
// console.log(roverspraket)

    
   
return (
        <>
    
            <h1 className='text-primary my-3'> Rövarspråket Translator</h1>
            <div style={{height:'200px'}}className='my-4 border border-primary w-75 rounded-5 mx-auto'>
               <h3>{roverspraket}</h3>
            </div>
         <div className='mx-auto'>   
             <InputGroup className="mb-3 border border-info w-75 mx-auto">
    <FormControl
      placeholder="Write Your Text "
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      name="english"
      onBlur={handleInput}
    />
    <Button  onClick={()=>translate(inputText)} variant="primary" id="button-addon2">
      English to Rövarspråk
    </Button>
  </InputGroup>

   <Button  style={{marginRight:"100px"}}className="w-50" variant="primary">Rövarspråk to English</Button>

         </div>
        </>
    );
};

export default Home;