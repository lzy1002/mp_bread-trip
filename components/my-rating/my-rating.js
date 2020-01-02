// components/my-rating/my-rating.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      value: 0
    },
    ratingType: {
      type: String,
      value: "big"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    classList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached() {
      const score = this.properties.score;
      console.log(score);
      const integer = Math.floor(score);
      const decimal = score - integer;
      const classList = [];
      for(let i = 0; i< integer; i++) {
        classList.push("star-all");
      }

      if(decimal > 0) {
        classList.push("star-half");
      }

      const diff = 5 - classList.length;
      for(let k = 0; k< diff; k++) {
        classList.push("star-none");
      }

      this.setData({
        classList
      })

      console.log(classList);
    }
  }
})
