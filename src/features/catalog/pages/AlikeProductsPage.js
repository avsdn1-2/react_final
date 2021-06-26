import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from "react-router";
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




export function AlikeProductsPage(classes) {
    const { category } = useParams();

    const { data,error,isLoading } = useQuery("products", async () => {
       let { data } = await getList();
       return data;
    });

  return (
    <div className="page">
        {isLoading ?
            <div>Loading...</div>
         : error ?
                <div>Loading...</div>
                 :
            <div>
                {
                    data.filter(product => product.categories.includes(category)).map((product) => (
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
                                        product.isNew ?
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

AlikeProductsPage.propTypes = {};
