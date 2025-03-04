function showImage(url) {
  const img = new Image()
  img.src = url
  img.onload = () => {
    console.log("加载成功")
  }
  img.onerror = () => {
    console.log("加载失败")
  }
}