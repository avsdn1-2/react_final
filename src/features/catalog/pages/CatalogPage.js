import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { getList } from "../api/CatalogAPI";
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {Link, NavLink} from 'react-router-dom';
import StyledBadge from '@material-ui/core/Badge';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';


export function CatalogPage(classes) {
    const [catalog,setCatalog] = useState([]);
    const [allData,setAllData] = useState([]);

    const { data,error,isLoading } = useQuery("products", async () => {
       let { data } = await getList();
       //return data;
        setAllData(data);
        setCatalog(data);
    });

    const [isInStore,setIsInStore] = useState(false);
    const [isSale,setIsSale] = useState(false);
    const [isNew,setIsNew] = useState(false);
    const [text,setText] = useState('');
    //для слайдера ценового диапазона
    const [priceRange, setPriceRange] = useState([0, 1000]);
    //для слайдера рейтинга
    const [ratingRange, setRatingRange] = useState([0, 100]);


    const handleChangeIsInStore = () => {
        setIsInStore(!isInStore);
    }
    const handleChangeIsSale = () => {
        setIsSale(!isSale);
    }
    const handleChangeIsNew = () => {
        setIsNew(!isNew);
    }
    const handlePriceRangeChange = (event, newValue) => {
        setPriceRange(newValue);
    };
    const handleRatingRangeChange = (event, newValue) => {
        setRatingRange(newValue);
    };
    const handleChangeText = (event) => {
        let { target } = event,
        val = target.value;
        setText(val);
    }


    function valuetext(value) {
        return `${value}°`;
    }


  return (
    <div className="page">
        {isLoading ?
            <div>Loading...</div>
         : error ?
                <div>Loading...</div>
                 :
            <div>

                <FormGroup>
                    <FormControlLabel
                        control={<Switch size="small" onChange={handleChangeIsInStore} />}
                        label="Есть в наличии"
                    />
                    <FormControlLabel
                        control={<Switch size="small" onChange={handleChangeIsSale} />}
                        label="Распродажа"
                    />
                    <FormControlLabel
                        control={<Switch size="small" onChange={handleChangeIsNew} />}
                        label="Новинка"
                    />
                    <TextField id="outlined-basic" label="Поиск по названию" variant="outlined" onBlur={handleChangeText}/>
                </FormGroup>



                <Typography id="range-slider" gutterBottom>
                    Ценовой диапазон
                </Typography>
                <Slider
                    value={priceRange}
                    min={0}
                    max={1000}
                    onChange={handlePriceRangeChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />

                <Typography id="range-slider" gutterBottom>
                    Рейтинг
                </Typography>
                <Slider
                    value={ratingRange}
                    min={0}
                    max={100}
                    onChange={handleRatingRangeChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />


                {

                    catalog.filter(function (product) {
                        if (isInStore === true){
                        return product.isInStock === true;}
                        else return true;
                    }).filter(function (product) {
                        if (isSale === true){
                            return product.isSale === true;}
                        else return true;
                    }).filter(function (product) {
                        if (isNew === true){
                            return product.isNew === true;}
                        else return true;
                    }).filter(function (product) {
                        if (product.price >= priceRange[0] && product.price <= priceRange[1]) return true;
                        else return false;
                    }).
                    filter(function (product) {
                        if (product.rating >= ratingRange[0] && product.rating <= ratingRange[1]) return true;
                        else return false;
                    }).filter(function (product) {
                        if (text != ''){
                            return product.title.indexOf(text) > -1;}
                        else return true;
                    }).

                    map((product) => (

                            <div key={product.id}>{
                                <Card className={classes.card} style={{width:'350px',height:'500px',margin:'10px 10px 10px 0',float:'left'}}>

                                    <img width="350px" height="200px" src={product.photo}/>
                                    <CardContent className={classes.content}>
                                        {
                                            product.isNew ?
                                                (<StyledBadge badgeContent={"New"} color="secondary">
                                                    <Typography
                                                        className={"MuiTypography--heading"}
                                                        variant={"h6"}
                                                        gutterBottom
                                                    >
                                                        {product.title}
                                                    </Typography>
                                                </StyledBadge>) :
                                                (
                                                    <Typography
                                                        className={"MuiTypography--heading"}
                                                        variant={"h6"}
                                                        gutterBottom
                                                    >
                                                        {product.title}
                                                    </Typography>
                                                )
                                        }
                                        <Divider className={classes.divider} light />

                                        <Typography
                                            className={"MuiTypography--subheading"}
                                            variant={"caption"}
                                        >
                                            {product.description}
                                        </Typography>
                                        <Divider className={classes.divider} light />
                                        {
                                            product.isSale ?
                                                (<StyledBadge badgeContent={"Sale"} color="secondary">
                                                    <Typography
                                                        className={"MuiTypography--subheading"}
                                                        variant={"caption"}
                                                    >
                                                        Price: {product.price} USD <span style={{width:'50px',color:'white'}}>__</span>
                                                    </Typography>
                                                </StyledBadge>) :

                                                (<Typography
                                                    className={"MuiTypography--subheading"}
                                                    variant={"caption"}
                                                >
                                                    Price: {product.price} USD
                                                </Typography>)
                                        }
                                        <Divider className={classes.divider} light />

                                        <Rating name="size-medium" defaultValue={product.rating/20} />

                                        <Divider className={classes.divider} light />
                                        {
                                            product.isInStock ?
                                            (
                                                <Button to="/add" exact component={Link} variant="contained" color="primary">
                                                    Добавить в корзину
                                                </Button>
                                            ) :
                                                (
                                                    <Button variant="contained" disabled>
                                                        Нет в наличии
                                                    </Button>
                                                )

                                        }

                                        <Divider className={classes.divider} light />

                                    </CardContent>
                                    <div>
                                        <Link to={`/products/${product.id}`}><button>Узнать больше...</button></Link>
                                    </div>

                                </Card>




                            }   </div>
                        ))

                }
            </div>


        }


    </div>
  );
}

CatalogPage.propTypes = {};
