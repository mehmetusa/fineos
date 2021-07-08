const fineosPage = require("../pages/fineos.page");
const configData = require("../config");

describe("I need to automate this webpage, So I can show my automation capabilities", async () => {
  it("Add a user and validate the user has been added to the table", async () => {
    await browser.url("angularjs-protractor/webtables");
    await browser.maximizeWindow();

     (await fineosPage.addUser()).click();
     (await fineosPage.firstName()).setValue(configData.firstName);
     (await fineosPage.lastName()).setValue(configData.lastName);
     (await fineosPage.userName()).setValue(configData.username);
     (await fineosPage.password()).setValue(configData.password);
     (await fineosPage.customer()).click();
     (await fineosPage.roleId()).click();
     (await fineosPage.email()).setValue(configData.email);
     (await fineosPage.mobilephone()).setValue(configData.cellPhone);
     (await fineosPage.btnSave()).waitForDisplayed();
     (await fineosPage.btnSave()).click();

     const email_ = `//td[text()='${configData.email}']`
     const _email_ = await $(email_) 
     const _email__= await _email_.getText();
     expect(_email__).equal(configData.email);

     const firstName_ =  `//td[text()='${configData.firstName}']`
     const _firstName_ = await $(firstName_)
     const _firstName__= await _firstName_.getText();
     expect(_firstName__).equal(configData.firstName);

  }),
  it("Delete user User Name: novak and validate user has been deleted", async () => {
    await browser.url("angularjs-protractor/webtables");
    await browser.maximizeWindow();

     const deleteUserName_ = `//td[text()='${configData.deleteUsername}']/following::button[2]`
     const userName_ = `//td[text()='${configData.deleteUsername}']`
     const _userName_ = await $(userName_);

     const _email_ = await $(deleteUserName_);
     const _email__= await _email_.click();

     (await fineosPage.btnOK()).waitForDisplayed();
     (await fineosPage.btnOK()).click();
     expect(_userName_.isDisplayed(false))

  })
});
