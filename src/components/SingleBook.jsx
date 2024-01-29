import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Divider, Button } from '@mui/material';
import CheckoutBook from './bookCheckout';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SingleBook = ({ book }) => {

    const {title, author, description, coverimage, available } = book;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='books' sx={{ maxWidth: 345, margin: '10px', bgcolor: 'DimGrey', boxShadow: '1px 1px 20px', borderStyle: 'solid',  }}>
              <CardHeader 
        title={title} sx={{
            textAlign: 'center', color: 'white'
        }}
      />
      <CardMedia sx={{borderStyle: 'double'}}
        component="img"
        height="194"
        image={coverimage}
        alt={`Cover of ${coverimage}`}
      />
      <CardContent>
        <Typography variant="body2" color="white">
        {available ? 'Available' : 'Checked Out'}
        </Typography>
      </CardContent>
      <Divider sx={{color: 'white'}} />
      <CardActions disableSpacing>
      <CheckoutBook />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{
            color: 'white'
          }} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography sx={{color: 'white'}}>Author: {author} </Typography>
        <Divider />
          <Typography sx={{
            marginTop: '20px', color: 'white'
          }} >
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default SingleBook;