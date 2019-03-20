import * as React from "react";
import {
  Button,
  Intent,
  Menu,
  MenuItem,
  Popover,
  Position,
  PopoverInteractionKind,
} from "@blueprintjs/core";
import { map } from "lodash";

import "./toolbar.less";

export interface IToolbarProps {
  onOpen: () => void;
  onSave: () => void;
  onNew: () => void;
  onRender: () => void;
  path: string;
  needsSaving: boolean;
  scale: string;
  scaleOptions: string[];
  onChangeScale: (scale: string) => void;
}

export default class Toolbar extends React.Component<IToolbarProps, {}> {
  public render() {
    return (
      <div className="app-toolbar">
        <Button
          icon="document"
          intent={Intent.NONE}
          minimal={true}
          text="New"
          onClick={this.props.onNew}
        />
        <Button
          icon="document-open"
          intent={Intent.NONE}
          minimal={true}
          text="Open"
          onClick={this.props.onOpen}
        />
        <Button
          icon="floppy-disk"
          intent={this.props.needsSaving ? Intent.DANGER : Intent.NONE}
          minimal={true}
          text="Save"
          onClick={this.props.onSave}
        />
        <Button
          icon="draw"
          intent={this.props.needsSaving ? Intent.WARNING : Intent.NONE}
          minimal={true}
          text="Render"
          onClick={this.props.onRender}
        />
        <span
          style={{flex: 1}}
        />
        {this.props.path && this.props.path.length > 0 && (
          <Button
            text={this.props.path}
            minimal={true}
            intent={Intent.NONE}
          />
        )}
        <Popover
          content={(
            <Menu>
              {map(this.props.scaleOptions, (opt: string) => (
                <MenuItem
                  key={opt}
                  text={opt}
                  active={opt === this.props.scale}
                  onClick={() => this.props.onChangeScale(opt)}
                />
              ))}
            </Menu>
          )}
          position={Position.BOTTOM_LEFT}
          interactionKind={PopoverInteractionKind.CLICK}
        >
          <Button
            icon="zoom-to-fit"
            text={this.props.scale}
            minimal={false}
            intent={Intent.NONE}
          />
        </Popover>
      </div>
    );
  }
}
