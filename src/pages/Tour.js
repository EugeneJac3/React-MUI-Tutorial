import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage.js";
import CustomizedAccordion from "../components/Accordian.js";
import BasicModal from "../components/Modal.js";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation"

const Tour = () => <Container sx={{width: 900}}>
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
    <img src="https://s3.amazonaws.com/virginhotelslv.com/content/uploads/2021/04/Website-Hero-Images-Mohegan-Sun-B-1300x420-1.jpg"
    alt=""
    height={325}
    />
    <ImageCollage />
    </Box>
    <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
            ABOUT THIS TICKET
        </Typography>
        <Typography varieant="paragraph" component="p" marginTop={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat pariatur ipsum quos consequatur voluptatem. Rem laudantium atque ipsa tempore nobis iusto nesciunt accusamus optio nostrum, minima nihil sed libero pariatur quod deleniti accusantium? Sapiente quidem at vitae culpa ab quia.
        </Typography>
    </Box>
    <Box marginBottom={5}>
        <Typography variant="h6" component="h4" marginTop={3}>
            Frequently Asked Questions
        </Typography>
        <Typography varieant="paragraph" component="p" marginTop={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat pariatur ipsum quos consequatur voluptatem. Rem laudantium atque ipsa tempore nobis iusto nesciunt accusamus optio nostrum, minima nihil sed libero pariatur quod deleniti accusantium? Sapiente quidem at vitae culpa ab quia.
        </Typography>
        <CustomizedAccordion />
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
</Container>

export default Tour;