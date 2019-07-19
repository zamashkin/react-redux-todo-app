import React, { Component } from "react";
import { ItodoItemObject } from ".";
import { TodoItem } from ".";

interface ItodoList {
  items: ItodoItemObject[];
  changeIsActive: (id: number) => void;
  delete: (id: number) => void;
  filter: string;
}
class TodoList extends React.Component<ItodoList, {}> {
  public render() {
    return <div className="todoList">{this.itemsToShow()}</div>;
  }

  private itemsToShow() {
    const itemsToShow = this.props.items.map((item: ItodoItemObject) => {
      if (this.props.filter === "active" && !item.isActive) {
        return null;
      }
      if (this.props.filter === "done" && item.isActive) {
        return null;
      }
      return (
        <TodoItem
          key={item.id}
          item={item}
          changeIsActive={this.props.changeIsActive}
          delete={this.props.delete}
        />
      );
    });
    return itemsToShow;
  }
}

export { TodoList };
