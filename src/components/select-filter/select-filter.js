import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { filterByTitle, setTitleFilter } from "../../ac";
import PropTypes from "prop-types";

class SelectFilter extends React.Component {
  handleChange = selectedOption => {
    this.props.setTitleFilter(selectedOption);
    this.props.filterByTitle(selectedOption.value);
  };

  render() {
    const { titles, titleFilter } = this.props;

    return (
      <Select
        data-id="filter-body"
        value={titleFilter}
        onChange={this.handleChange}
        options={titles}
      />
    );
  }
}

SelectFilter.propTypes = {
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired,
  titleFilter: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  }),
  setTitleFilter: PropTypes.func,
  filterByTitle: PropTypes.func
};

const mapStateToProps = state => ({
  titles: state.filters.titles,
  titleFilter: state.filters.titleFilter
});

const mapDispatchToProps = {
  setTitleFilter,
  filterByTitle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter);
