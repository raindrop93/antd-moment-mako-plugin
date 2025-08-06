const generateRegExp = /generate\/dayjs/;

const updateResource = code => {
  return code.replaceAll('dayjs', 'moment');
};

// MomentMakoPlugin - 将 dayjs 转换为 moment
module.exports = {
  name: 'antd-moment',
  transform(code, id) {
    try {
      // 只处理 TypeScript 和 JavaScript 文件
      if (!id?.match(/\.(ts|tsx|js|jsx)$/) || typeof code !== 'string') {
        return null;
      }

      let transformedCode = code;
      if (generateRegExp.test(code)) {
        console.log('MomentMakoPlugin transform: ', id);
        transformedCode = updateResource(code);
      }

      return {
        content: transformedCode,
        type: 'js',
      };
    } catch (error) {
      // 如果出现错误，返回原始代码
      console.warn('MomentMakoPlugin error:', error.message);
      return null;
    }
  },
};