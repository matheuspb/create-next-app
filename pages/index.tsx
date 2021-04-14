import React from 'react'
import {
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100,
  },
})

const Home: React.FunctionComponent = () => {
  const styles = useStyles()

  return (
    <Box className={styles.container}>
      <Typography variant='h2'>Hello World!</Typography>
    </Box>
  )
}

export default Home
