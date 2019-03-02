import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link';

export default function listItemNextLink(props) {
  const { href } = props;
  return (
    <Link href={href}>
      <ListItem button component="a" {...props} />
    </Link>
  );
}

listItemNextLink.propTypes = {
  href: PropTypes.string.isRequired,
};
