Page({
  data: {
    hidden_company_object_id: 0,
    company_array: []
  },
  eksShow: function() {
    var company_array = wx.getStorageSync('company_array')
    for (var i = 0; i < company_array.length; i++) {
      var company_object = company_array[i]
      var account_array = company_object.account_array
      company_object.hidden_boolean = true
    }
    this.setData({
      company_array: company_array
    })
    wx.setStorageSync('company_array', this.data.company_array)
  },
  onShow: function() {
    this.eksShow()
  },
  onLoad: function() {
    this.eksShow()
  },
  controlCompanyObjectShowHandle: function(e) {
    var company_array = wx.getStorageSync('company_array')
    var company_object_id = e.currentTarget.dataset.company_object_id

    var account_array_hidden_boolean = true
    for (var i = 0; i < company_array.length; i++) {
      var company_object = company_array[i]
      if (company_object_id == company_object.id) {
        var account_array = company_object.account_array
        for (var j = 0; j < account_array.length; j++) {
          var account_object = account_array[j]
          if (!account_object.hidden_boolean) {
            account_array_hidden_boolean = false
          }
        }
      }
    }

    for (var i = 0; i < company_array.length; i++) {
      var company_object = company_array[i]
      if (company_object_id == company_object.id) {
        if (account_array_hidden_boolean) {
          company_object.hidden_boolean = false
        } else {
          company_object.hidden_boolean = !company_object.hidden_boolean
        }
        var account_array = company_object.account_array
        for (var j = 0; j < account_array.length; j++) {
          var account_object = account_array[j]
          var account_array = company_object.account_array
          var account_array_hidden_boolean = true
          for (var j = 0; j < account_array.length; j++) {
            var account_object = account_array[j]
            if (company_object.hidden_boolean !== account_object.hidden_boolean) {
              account_object.hidden_boolean = company_object.hidden_boolean
            }
          }
        }
      }
    }
    this.setData({
      company_array: company_array
    })
    wx.setStorageSync('company_array', this.data.company_array)
  },
  controlAccountObjectShowHandle: function(e) {
    var company_array = wx.getStorageSync('company_array')
    var company_object_id = e.currentTarget.dataset.company_object_id
    var account_object_id = e.currentTarget.dataset.account_object_id

    for (var i = 0; i < company_array.length; i++) {
      var company_object = company_array[i]
      if (company_object_id == company_object.id) {
        var account_array = company_object.account_array
        for (var j = 0; j < account_array.length; j++) {
          var account_object = account_array[j]
          if (account_object_id && account_object_id == account_object.id) {
            company_object.hidden_boolean = false
            account_object.hidden_boolean = !account_object.hidden_boolean
          }
        }
      }
    }
    this.setData({
      company_array: company_array
    })
    wx.setStorageSync('company_array', this.data.company_array)
  }
})