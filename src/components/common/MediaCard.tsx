import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MediaCardProps } from './ControlInterfaces';
import { StyledCard, StyledCardMedia } from './styled/CommonComponents';

class MediaCard extends React.Component<MediaCardProps> {
  constructor(props: MediaCardProps) {
    super(props)
  }

  render() {
    return (
      <StyledCard>
        <CardActionArea>
          <StyledCardMedia
            image={this.props.image}
            title={this.props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.contentTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.contentDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </StyledCard>
    );
  
  }
};

export default MediaCard;
