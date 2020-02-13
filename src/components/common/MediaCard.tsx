import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MediaCardProps } from './ControlInterfaces';
import { StyledCard, StyledCardActionArea, StyledCardMedia, StyledCardAction, StyledEventTwoTone, StyledRateReviewTwoTone, StyledDescription, StyledTitle, StyledCardActionSpan, StyledCardActionSpanDiv } from './styled/CommonComponents';
import defaultImage from '../../images/default-image_300.png';

class MediaCard extends React.Component<MediaCardProps> {
  constructor(props: MediaCardProps) {
    super(props)
  }

  render() {
    return (
      <StyledCard>
        <StyledCardActionArea>
          <StyledCardMedia
            image={this.props.image ? this.props.image : defaultImage}
            title={this.props.title}
          />
          <CardContent>
            <StyledTitle gutterBottom variant="h5">
              {this.props.contentTitle}
            </StyledTitle>
            <StyledDescription variant="body2" color="textSecondary">
              {this.props.contentDescription ? this.props.contentDescription : 'No description provided'}
            </StyledDescription>
          </CardContent>
        </StyledCardActionArea>
        <StyledCardAction>
          <StyledCardActionSpanDiv>
            <StyledEventTwoTone titleAccess='Release date' />
            <StyledCardActionSpan>{this.props.releaseDate ? this.props.releaseDate : 'No Release Date Provided'}</StyledCardActionSpan>            
          </StyledCardActionSpanDiv>
          <StyledCardActionSpanDiv>
            <StyledRateReviewTwoTone titleAccess='Vote average'/>
            <StyledCardActionSpan>{this.props.voteAverage}</StyledCardActionSpan>
          </StyledCardActionSpanDiv>
        </StyledCardAction>
      </StyledCard>
    );
  
  }
};

export default MediaCard;
