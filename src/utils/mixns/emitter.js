// this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue);
//
function broadcast(componentName, eventName, params) {
  // 遍历所有子组件
  this.$children.forEach((child) => {
    var name = child.$options.componentName;
    if (name === componentName) {
      // 以树的形式，找到子树第一个name为componemtName的组件，发射eventName事件-或者直到不存在子组件停止
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      // 递归向下广播-
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
/**
 * dispatch 找到顶级 vue实例，再递归向下进行广播
 */
export default {
  methods: {
    //源码使用： this.dispatch('ElFormItem', 'el.form.blur', [this.value]);
    // 主要是：表单校验--根据值触发表单事件，验证表单
    dispatch(componentName, eventName, params) {
      //获取父元素
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      // 找到最近的componentName为{{componentName}}的父级元素
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        // this.$on('el.form.blur', this.onFieldBlur);
        //修改this指向，使得$emit的方法里面的this直接指向parent 触发 实例中$on的事件
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    // this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue);
    // 递归向下广播
    broadcast(componentName, eventName, params) {
      //修改this指向，使得broadcast的方法里面的this直接指向当前vue实例
      broadcast.call(this, componentName, eventName, params);
    },
  },
};
