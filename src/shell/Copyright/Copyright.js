import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© "}
      {new Date().getFullYear()} {"with ❤ from "}
      <small>
        <Link color="inherit" href="https://github.com/tincho/">
          <code>@mrtinsal</code>
        </Link>
      </small>
      {" to "}
      <Link color="inherit" href="https://atixlabs.com/">
        AtixLabs
      </Link>
    </Typography>
  );
}
