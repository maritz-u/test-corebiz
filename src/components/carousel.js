import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from "react";


function Url() {
    const url = "https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products";
    const [data, setData] = useState([]);
    const fetchApi = async () => {
        const response = await fetch(url);
        console.log(response.status);
        const responseJSON = await response.json();
        setData(responseJSON);
        console.log(responseJSON);
    };

    useEffect(() => {
        fetchApi();
    }, [])

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });

    const classes = useStyles();

  return (
      <div>
    <h3>Mais Vendidos</h3>
    {data.map((item) => (
    <Card key={item.id} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.img}
          title={item.product}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Por R$ {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          COMPRAR
        </Button>
      </CardActions>
    </Card>
  ))};
  </div>
  )}

export default Url;


{/* <div>
<h3>Mais Vendidos</h3>
            {data.map((item) => (

                <Card key={item.id} className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={item.img}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            {item.product} <br />
                            <Typography gutterBottom variant="h5" component="h2">
                                Por R$ {item.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small">
                            COMPRAR
        </Button>
                    </CardActions>
                </Card>
            ))};
        </div> */}