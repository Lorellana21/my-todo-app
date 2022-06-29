import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import { orange } from '@mui/material/colors';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';




const AppCard = ({ onDelete, title, description }) => (
    <div className="card">

        <Card sx={{ minWidth: 250 }}  >
            <CardContent sx={{ bgcolor: orange[200] }}>
                <Typography variant="h3" component="div">
                    {title}
                </Typography>
                <Typography  variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Stack direction="column" spacing={6}>
                    <IconButton color="secondary" aria-label="delete"
                        onClick={onDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            </CardContent>
        </Card>
    </div>
);

AppCard.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
};

export default AppCard;