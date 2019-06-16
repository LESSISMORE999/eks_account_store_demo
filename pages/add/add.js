Page({
  data: {
    company_name: '',
    username: '',
    password: '',
    company_array: []
  },
  save: function () {
    wx.setStorageSync('company_array', this.data.company_array)
  },
  inputCompanyNameChangeHandle: function (e) {
    this.setData({ company_name: e.detail.value })
  },
  inputUsernameChangeHandle: function (e) {
    this.setData({ username: e.detail.value })
  },
  inputPasswordChangeHandle: function (e) {
    this.setData({ password: e.detail.value })
  },
  saveHandle: function () {
    var company_array = this.data.company_array
    var company_object = new Object()
    if (company_array != null) {
      company_object.id = company_array.length + 1
    } else {
      company_object.id = + 1
    }
    company_object.company_name = this.data.company_name

    var account_array = new Array()
    var account_object = new Object()
    if (account_array != null) {
      account_object.id = account_array.length + 1
    } else {
      account_object.id = 1
    }

    account_object.username = this.data.username
    account_object.password = this.data.password

    account_array.push(account_object)
    company_object.account_array = account_array
    company_array.push(company_object)

    console.log(company_array)
    this.save()
  }
})
