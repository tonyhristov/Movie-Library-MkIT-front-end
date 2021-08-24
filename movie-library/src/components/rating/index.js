import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import addRating from '../../utils/addRating';
import getRating from '../../utils/getRating';

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const CustomizedRatings = () => {
    const [value, setValue] = useState(2)
    const params = useParams()

    const fetchRating = useCallback(async()=>{
       const rating = await getRating(params.userId, params.movieId)

       setValue(Object.values(rating))
    }, [])

    useEffect(()=>{
        fetchRating()
    }, [fetchRating])

  return (
    <div>
      <Box component="fieldset"  borderColor="transparent">
        <Typography component="legend">Custom icon set</Typography>
        <Rating
          name="rating"
          value={ value }
          precision={1}
          onChange={ async(_, value) =>  {
            setValue(value)
            await addRating(params.userId, params.movieId, value)
          }}
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}

          
        />
      </Box>
    </div>
  );
}


export default CustomizedRatings