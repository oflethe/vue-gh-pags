module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-gh-pags/' //資料夾路徑，儲存庫名稱
      : '/'
  }