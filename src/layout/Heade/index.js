import React, { Component } from "react";
import headerCss from "./header.scss";

class Heade extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      items: this.iconItems
    };
  }

  iconItems = [
    {
      isSelected: false,
      text: "省钱",
      icon: require("../../assets/img/home/tag.png"),
      action: () => {
        this.updateItemSelectedStatusHandle(0);
      }
    },
    {
      isSelected: false,
      text: "赚钱",
      icon: require("../../assets/img/home/make_money.png"),
      action: e => {
        this.updateItemSelectedStatusHandle(1);
      }
    },
    {
      isSelected: false,
      text: "消息中心",
      icon: require("../../assets/img/home/notice.png"),
      action: e => {
        this.updateItemSelectedStatusHandle(2);
      }
    },
    {
      isSelected: false,
      text: "个人中心",
      icon: require("../../assets/img/home/profile.png"),
      action: e => {
        this.updateItemSelectedStatusHandle(3);
      }
    }
  ];

  updateItemSelectedStatusHandle = index => {
    const newItems = [...this.state.items];
    newItems.forEach((item, mIndex) => (item.isSelected = index === mIndex));
    this.setState({
      items: newItems
    });
  };

  renderFunctoinalItemViews = () => {
    return this.state.items.map(item => {
      const clsName = item.isSelected
        ? headerCss.functional_item +
          " " +
          headerCss.functional_item_selected
        : headerCss.functional_item;
      return (
        <div key={item.text} className={clsName} onClick={item.action}>
          <img className={headerCss.icon} src={item.icon} alt="" />
          {item.text}
        </div>
      );
    });
  };

  render() {
    return (
      <div className={headerCss.header_bg}>
        <div className={headerCss.header_content_container}>
          <img
            className={headerCss.logo}
            src={require("../../assets/img/home/logo.png")}
            alt=""
          />
          <div className={headerCss.functional_list_container}>
            {this.renderFunctoinalItemViews()}
          </div>
        </div>
      </div>
    );
  }
}
export default Heade;
