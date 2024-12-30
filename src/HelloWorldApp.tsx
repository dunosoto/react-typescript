import PropTypes from 'prop-types';

export const HelloWorldApp = ():JSX.Element => {
  return (
    <>
      <h1>HelloWorldApp</h1>
    </>
  )
}

//proptypes for define types props. this is not necessary for typescript
HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired
}

HelloWorldApp.defaultPropTypes = {
  title: 'this a title'
}