import ListItem from '@material-ui/core/ListItem';

export default function listItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
