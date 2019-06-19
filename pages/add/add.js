Page({
  data: {
    company_name: '',
    username: '',
    password: '',
    company_array: []
  },
  save: function() {
    wx.setStorageSync('company_array', this.data.company_array)
  },
  inputValueHandle: function(e) {
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value
    })
  },
  saveHandle: function() {
    var company_array = wx.getStorageSync('company_array')
    if (company_array == null || company_array.length == 0) {
      company_array = new Array()
    }
    var company_object = null
    var account_array = null
    var company_object_exist_boolean = false
    for (var i = 0; i < company_array.length; i++) {
      var _company_object = company_array[i]
      if (_company_object.company_name === this.data.company_name.replace(/\s+/g, '')) {
        company_object = _company_object
        account_array = company_object.account_array
        company_object_exist_boolean = true
      }
    }
    if (company_object == null){
      company_object = new Object()
      account_array = new Array()
      company_object.account_array = account_array
    }
    company_object.id = company_array.length + 1
    company_object.company_name = this.data.company_name.replace(/\s+/g, '')
    company_object.hidden_boolean = true

    var account_object = new Object()
    account_object.id = account_array.length + 1
    account_object.hidden_boolean = true
    account_object.username = this.data.username.replace(/\s+/g, '')
    account_object.password = this.data.password.replace(/\s+/g, '')
    account_array.push(account_object)

    if (!company_object_exist_boolean) {
      company_array.push(company_object)
    }
    this.setData({
      company_array: company_array
    })
    this.save()
    this.setData({
      company_name: '',
      username: '',
      password: '',
      company_array: []
    })
  }
})