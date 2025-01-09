import { Authorize } from "./authorize.js";
import { UiElement } from "./uielement.js";
// UI

const userinfodiv = document.getElementById('userinfo');
const logoutbtn = document.getElementById('logoutbtn')
// console.log(userinfodiv,logoutbtn);

const authorize = Authorize();
// Uielement instance
const uiele = UiElement(userinfodiv);

// Get info & render
authorize.getUser((data)=>{
    // console.log(data);

    uiele.userInfoEle(data);
    
})

// Login
logoutbtn.addEventListener('click',(e)=>{


    const {logoutUser} = Authorize();
    logoutUser();

});

