// pages/home/home.js
const app = getApp()

//start of page
Page({

  data: {
    posts: [],
    currentUser: null
  },

  onLoad: function (options) {

    this.setData({
      currentUser: app.globalData.userInfo
    })

    const self = this
    let Posts = new wx.BaaS.TableObject('posts_xhs')

    Posts.expand('user_id').find().then(
      (res) => { 
        console.log('your post has been loaded',res)
        self.setData({
          posts: res.data.objects
        })
      }, (err) => {
        console.log('your post failed',err)
      }
    )
  },

  userInfoHandler: function(userInfo) {
    let self = this
    wx.BaaS.auth.loginWithWechat(userInfo).then(
      (res) => {
      console.log('userInfo', res);
      self.setData({currentUser: res});
      wx.setStorageSync('userInfo', res)
      },
      err => {
        console.log('something went wrong!', err)
    })
  },

  navigateToPost: function(e) {
    console.log('navigateToPost', e)
    wx.navigateTo({
      url: `/pages/show/show?postID=${e.currentTarget.dataset.postid}`,
    })
  },

  //start of wux functions
  onChange(e) {
    console.log('onChange', e)
    this.setData({
        value: e.detail.value,
    })
},
onFocus(e) {
    console.log('onFocus', e)
},
onBlur(e) {
    console.log('onBlur', e)
},
onConfirm(e) {
    console.log('onConfirm', e)
},
onClear(e) {
    console.log('onClear', e)
    this.setData({
        value: '',
    })
},
onCancel(e) {
    console.log('onCancel', e)
}
//end of wux components



})
// end of page