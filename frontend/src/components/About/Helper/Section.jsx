import PropTypes from 'prop-types';

const Section =({title,description})=> {
  return (
    <div className="hidden md:block mb-20">
    <div className="flex items-center space-x-2">
      <div className="text-yellow-400 text-2xl">&gt;&gt;</div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <p className="mt-4 text-base md:text-lg">{description}</p>
  </div>
  )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default Section
