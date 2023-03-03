export default class UserInfo {
  constructor({ nameSelector, signatureSelector }) {
    this._name = document.querySelector(nameSelector);
    this._signature = document.querySelector(signatureSelector);
  }

  getUserInfo() {
    const profileData = {};

    profileData.name = this._name.textContent;
    profileData.signature = this._signature.textContent;

    return profileData;
  }

  setUserInfo(name, about) {
    this._name.textContent = name;
    this._signature.textContent = about;
  }
}
