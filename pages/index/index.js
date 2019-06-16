Page({
  data: {
    company_array: []
  },
  onShow: function() {
    var company_array = wx.getStorageSync('company_array')
    console.log(company_array)
    this.setData({
      company_array: company_array
    })
  },
  onLoad: function() {
    var company_array = wx.getStorageSync('company_array')
    console.log(company_array)
    this.setData({
      company_array: company_array
    })
  }
})