Page({
  data: {
    index_data_company_name_category_array: []
  },
  onShow: function () {
    var index_data_company_name_category_array = wx.getStorageSync('index_data_company_name_category_array')
    console.log(index_data_company_name_category_array)
    this.setData({ index_data_company_name_category_array: index_data_company_name_category_array })
  },
  onLoad: function () {
    var index_data_company_name_category_array = wx.getStorageSync('index_data_company_name_category_array')
    console.log(index_data_company_name_category_array)
    this.setData({ index_data_company_name_category_array: index_data_company_name_category_array })
  }
})