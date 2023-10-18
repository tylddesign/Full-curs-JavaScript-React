import { Component } from 'react';

import './catalog-filter.scss'

class CatalogFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onChange = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
            <>
                <section className="catalog-filter">
                    <div className="container">
                        <div className="wrapper">
                            <div>
                                <label>Looking for</label>
                                <input name="looking-for" placeholder="start typing here..." type="text" onChange={this.onChange} />
                            </div>
                            <div>
                                <label>Or filter</label>
                                <button>Brazil</button>
                                <button>Kenya</button>
                                <button>Columbia</button>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default CatalogFilter;