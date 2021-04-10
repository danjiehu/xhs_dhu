// pages/show/show.js

const app = getApp()

//start of page
Page({

  data:{
    currentUser: wx.getStorageSync('userInfo'),
    postID:"",
    postData:{},
    comment:[]
  },

  onLoad: function(e){

    const page = this
    console.log("onLoad",e)
    page.setData({
      postID: e.postID
    })

    //start of getting comments
    //end of getting comments

    //start of getting post display data
    //end of getting post display data

  
  }




})
//end of page

  // data: {
  //   currentUser: null,
  //   post: [],
  //   comments: [],
  //   likes: []
  // },


  // start of nika code 
  // addComment(event) {
  //   console.log(event)
  //   const comment = event.detail.value.comment
  //   let Comments = new wx.BaaS.TableObject('comments_log_xhs')
  //   let newComment = Comments.create();
  //   newComment.set({
  //     content: comment,
  //     post_id: this.data.post.id,
  //     user_id: this.data.currentUser.id
  //   })
  //   newComment.save().then(
  //     (res) => {
  //       console.log('new comment saved', res)
  //       let commentArray = this.data.comments
  //       commentArray.push(res.data)
  //       this.setData({
  //         comments: commentArray
  //       })
  //     }
  //   )
  // },

  // onLoad: function (options) {
  //   this.setData({
  //     currentUser: app.globalData.userInfo
  //   })

  //   let Posts = new wx.BaaS.TableObject('posts_xhs')
    
  //   const self = this
  //   Posts.expand('user_id').get(options.id).then(
  //     (res) => {
  //       console.log('post id', res)
  //       self.setData ({
  //         post: res.data
  //       })
  //     },
  //     (err) => {
  //       console.log('error', err)
  //     }
  //   )

  //   let Comments = new wx.BaaS.TableObject('comments_log_xhs')
  //   let query = new wx.BaaS.Query();
  //   query.compare('post_id', '=', options.id)
  //   Comments.expand('user_id').setQuery(query).find().then(
  //     (res) => {
  //       self.setData({
  //         comments: res.data.objects
  //       })
  //     },
  //     (err) => {
  //       console.log('err', err)
  //     }
  //   )
  // },
  // userInfoHandler: function(userInfo) {
  //   let self = this
  //   wx.BaaS.auth.loginWithWechat(userInfo).then(
  //     (res) => {
  //     console.log('userInfo', res);
  //     self.setData({currentUser: res});
  //     wx.setStorageSync('userInfo', res)
  //     },
  //     err => {
  //       console.log('something went wrong!', err)
  //   })
  // }
  // end of nika code 