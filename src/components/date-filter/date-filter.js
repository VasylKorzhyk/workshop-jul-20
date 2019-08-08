import React from "react";
import { connect } from "react-redux";
import DayPicker, { DateUtils } from "react-day-picker";
import { filterByDateRange, setDateRangeFilter } from "../../ac";
import PropTypes from "prop-types";

import "react-day-picker/lib/style.css";
import "./style.css";

class DateFilter extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.props.dateRange);
    this.props.setDateRangeFilter(range);

    if (range.from && range.to) {
      this.props.filterByDateRange(range);
    }
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  render() {
    const { from, to } = this.props.dateRange;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample" data-id="filter-body">
        <p>
          {!from && !to && "Please select the first day."}
          {from && !to && "Please select the last day."}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}

DateFilter.propTypes = {
  dateRange: PropTypes.shape({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date)
  }).isRequired,
  setDateRangeFilter: PropTypes.func,
  filterByDateRange: PropTypes.func
};

const mapStateToProps = state => ({
  dateRange: state.filters.dateRange
});

const mapDispatchToProps = {
  setDateRangeFilter,
  filterByDateRange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateFilter);
