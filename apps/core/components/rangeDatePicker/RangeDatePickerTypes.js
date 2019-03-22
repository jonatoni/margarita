// @flow

export type Props = {|
  +isVisible: boolean,
  +date?: Date,
  +minDate?: Date,
  +maxDate?: Date,
  +onConfirm: Date => void,
  +onDismiss: () => void,
|};
