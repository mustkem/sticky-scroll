import React from 'react';

class Sticky extends React.Component{

    constructor(props){
        super(props);

        this.myOverviewRef = React.createRef();
        this.myOffsetRef = React.createRef();

    }


    componentDidMount() {

        this.setVariables();

        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('load', this.handleLoad.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));

    }
    
    componentWillUnmount() {

        window.removeEventListener('scroll', this.handleScroll.bind(this));
        window.removeEventListener('load', this.handleLoad.bind(this));
        window.removeEventListener('resize', this.handleResize.bind(this));

    }

    handleLoad() {
        
        this.setVariables()
        this.handleScroll();

    }

    setVariables(){
        let element = this.myOverviewRef.current;
        let elementOffset = this.myOffsetRef.current;
        let elementFooter = document.querySelector('.footer');

        this.setState({
            headerHeight:document.querySelector('.header').offsetHeight,
            elementHeight:element.offsetHeight,
            elementOffsetTop: window.scrollY + elementOffset.getBoundingClientRect().top,
            footerOffsetTop:window.scrollY + elementFooter.getBoundingClientRect().top,
            windowWidth:window.outerWidth
        });
    }

    

    handleResize() {

        this.setVariables()
        this.handleScroll();

    }

    
    handleScroll() {

         


            let element = this.myOverviewRef.current;
            let elementOffsetTop = this.state.elementOffsetTop;
            let headerHeight = this.state.headerHeight;
            let windowScrollTop = window.scrollY;
            let footerOffsetTop = this.state.footerOffsetTop;
            let elementHeight = this.state.elementHeight;
            let topSpace = elementOffsetTop - headerHeight;
            let bottomSpace = footerOffsetTop - headerHeight - elementHeight;
            let scrollSticky = elementOffsetTop - windowScrollTop - headerHeight;


            if( windowScrollTop >= topSpace  && windowScrollTop <= bottomSpace){
                element.style.position="absolute";
                element.style.top = -scrollSticky + "px";

                this.setState({
                    elementPosition:"absolute"
                })

            } else if(windowScrollTop <= topSpace) {
                element.style.position="relative";
                element.style.top="auto";

                this.setState({
                    elementPosition:""
                })
            }

    }

    render(){
        

        return( 
            <div className="overview">
                    <div ref={this.myOffsetRef} className="overview-content " >
                        <div className="overview-sticky" ref={this.myOverviewRef}>
                            <div className="overview-inner">
                                Home <br />
                                Sticky
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
} 
export default Sticky;