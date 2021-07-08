const elementUtil = require('../util/elementUtil');

class LoginPage {

    addUser=async ()=> await $("//button[contains(text(),' Add User')]")
    firstName=async ()=> await $('[name="FirstName"]')
    lastName = async ()=> await $('[name="LastName"]');
    userName = async ()=> await $('[name="UserName"]');
    password = async ()=> await $('[name="Password"]');
    customer = async ()=> await $('[value="15"]');
    roleId = async ()=> await $('[value="0"]');
    email = async ()=> await $('[name="Email"]');
    mobilephone = async ()=> await $('[name="Mobilephone"]');
    btnSave = async ()=> await $("//button[text()='Save']");
    btnOK = async ()=> await $("//button[text()='OK']");

   
   
    isSignUpLinkExist() {
        return elementUtil.doIsDisplayed(this.signUpLink)
    }
}
module.exports = new LoginPage()


//const btnAddUser = await $("//button[contains(text(),' Add User')]")