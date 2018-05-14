import * as React from 'react';

import { withStyles, WithStyles } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import AddIcon from '@material-ui/icons/Add';

import { inject } from '../../../utils';
import { Using, Field, Submit } from '../../../components/models';

import { BrandFormType, BrandFormModel } from '../stores/brands';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

interface BrandFormProps {
  onChange: (newVal: any) => void;

  store?: BrandFormType;
}

@inject(BrandFormModel)
class BrandFormView extends React.Component<BrandFormProps & WithStyles<'button'>, {open: boolean}> {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  private handleOpen = () => {
    this.setState({open: true});
  }
  private handleClose = () => {
    this.setState({open: false});
  }
  private handleSuccess = () => {
    const { onChange, store } = this.props;
    onChange({ id: store.id, brand: store.brand });
    this.handleClose();
  }

  public render() {
    const { classes, store } = this.props;

    return (
      <Using model={store}>
        <IconButton className={classes.button} onClick={this.handleOpen}><AddIcon/></IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'>
          <DialogTitle>Brand Create</DialogTitle>
          <DialogContent>
            <Field field='brand'/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Submit onSuccess={this.handleSuccess} buttonProps={{color: 'primary'}}/>
          </DialogActions>
        </Dialog>
      </Using>
    );
  }
}

export default withStyles(styles)<BrandFormProps>(BrandFormView);
