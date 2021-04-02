import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './LocationInputSearch.scss';
import spinner from '../../assets/images/spinner.svg';
export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address:this.props.address 
    };

    this.addressRef = React.createRef();
  };

  componentDidUpdate(prevProps, prevStste) {
    if (prevProps.address !== this.props.address) {
      this.setState({
        address: this.props.address,
      });
    };
  };

  selectAddress(latLng,address) {
    this.props.onSelectAddress(latLng, address);
    this.setState({address:address});
  };

  handleChange = address => {
    if(!address){      
      this.props.onSelectAddress('', '');
    };

    this.setState({ address: address});
    this.addressRef.current.value = address;
  };
 
  handleSelect = address => {
    let address_temp = address;
    geocodeByAddress(address)
      .then(results => {
        address_temp =results[0].formatted_address;
        return getLatLng(results[0]);
      })

      .then(latLng => {
        console.log('Success', latLng,address_temp);
        this.selectAddress(latLng,address_temp);

    })
      .catch(error => console.error('Error', error));
  };
 
  render() {
    const placeholder = this.props.placeholder;
    const classname = this.props.className;
    const name = this.props.name ;
    const searchOptions = {
      //location: {lat:45.464161,lng: 9.190335},
      //radius: 5000, //meters
      types: ['address']
    };
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        shouldFetchSuggestions={this.state.address.length > 5}
        searchOptions={ searchOptions}
        
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={classname||"search"}>
            <input ref={this.addressRef } 
              {...getInputProps({
                placeholder:placeholder||'Cerca indirizzo ...',
                className: 'location-search-input',
                name: name, 
              })}
            />
            <div className="autocomplete-dropdown-container" >
              {loading && <div><img alt="loading" style={{height:'30px',width:'30px'}} src={spinner}/></div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#F2F2F2', cursor: 'pointer', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 10, borderBottomWidth: 1, borderColor: 'E0E0E0',}
                  : { backgroundColor: '#FFF', cursor: 'pointer', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 10,  borderBottomWidth: 1, borderColor: 'E0E0E0', };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <div>{suggestion.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}