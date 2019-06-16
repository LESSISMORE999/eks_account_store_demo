Page({
  data: {
    input_company_name_value: '',
    input_username_value: '',
    input_password_value: '',
    company_name_category_array: []
  },
  save: function () {
    wx.setStorageSync('index_data_company_name_category_array', this.data.company_name_category_array)
  },
  inputCompanyNameChangeHandle: function (e) {
    this.setData({ input_company_name_value: e.detail.value })
  },
  inputUsernameChangeHandle: function (e) {
    this.setData({ input_username_value: e.detail.value })
  },
  inputPasswordChangeHandle: function (e) {
    this.setData({ input_password_value: e.detail.value })
  },
  saveHandle: function () {
    var company_name_category_array = this.data.company_name_category_array
    var company_name_category_object = new Object()
    if (company_name_category_array != null) {
      company_name_category_object.id = company_name_category_array.length + 1
    } else {
      company_name_category_object.id = + 1
    }
    company_name_category_object.company_name = this.data.input_company_name_value

    var username_category_array = new Array()
    var username_category_object = new Object()
    if (username_category_array != null) {
      username_category_object.id = username_category_array.length + 1
    } else {
      username_category_object.id = 1
    }

    username_category_object.username = this.data.input_username_value
    username_category_object.password = this.data.input_password_value

    username_category_array.push(username_category_object)
    company_name_category_object.username_category_array = username_category_array
    company_name_category_array.push(company_name_category_object)

    console.log(company_name_category_array)
    this.save()
  }
})
