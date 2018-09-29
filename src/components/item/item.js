import React, { Component } from 'react'
//import './item.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    margin: 5
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7E0DE'
  }
};


class Item extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    const { classes } = this.props;
    return (
      < Card className={classes.card} >
        <CardActionArea>

          <img src={this.props.thumbnail} className={classes.img} />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">
              Price: ${this.props.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.btn}>
          <Button size="small" color="primary">
            Shopping cart
        </Button>
        </CardActions>
      </Card >
    )
  }
}
Item.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Item)
