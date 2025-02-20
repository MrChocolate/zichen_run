# Element Plus 多文件上传

## 代码示例
```html
<template>
  <el-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :file-list="fileList"
    list-type="picture">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handlePreview(file) {
      console.log(file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    submitUpload() {
      this.$refs.upload.submit();
    }
  }
};
</script>
```
