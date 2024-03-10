// Import necessary dependencies
import { Grid, Typography, Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock"; // Import other icons as needed

// Sample data for the features/services, replace with your actual data
const features = [
  {
    icon: <LockIcon />, // Replace with your actual icons
    title: "Crisis intervention",
    description:
      "Discover our crisis research such as hotlines, emergency contacts, and tips for recognizing crisis and reaching out safely.",
  },
  // ... Add other features/services here
];

export default function FeaturesSection() {
  return (
    <div className="p-8 bg-blue-900 text-white">
      <Typography variant="h4" className="mb-6">
        Welcome to a space of support and healing
      </Typography>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div className="flex items-center mb-2">
              {feature.icon}
              <Typography variant="h6" className="ml-2">
                {feature.title}
              </Typography>
            </div>
            <Typography className="mb-4">{feature.description}</Typography>
            <Button variant="outlined" color="inherit">
              View more
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
