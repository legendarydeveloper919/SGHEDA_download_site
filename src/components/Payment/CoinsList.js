import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  selectOption: {
    display: "flex",
    alignItems: "center",
  },
  optionIcon: {
    marginRight: "12px",
    width: "24px",
    height: "24px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
}));

const CoinsList = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState("btc");

  const options = [
    {
      value: "btc",
      label: "BTC",
      imageUrl: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/btc.png?raw=true)`,
    },
    {
      value: "ltc",
      label: "LTC",
      imageUrl: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/ltc.png?raw=true)`,
    },
    {
      value: "eth",
      label: "ETH",
      imageUrl: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/eth.png?raw=true)`,
    },
    {
      value: "xrp",
      label: "XRP",
      imageUrl: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/xrp.png?raw=true)`,
    },
    {
      value: "bch",
      label: "BCH",
      imageUrl: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/bch.png?raw=true)`,
    },
    {
      value: "trx",
      label: "TRX",
      imageUrl: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/trx.png?raw=true)`,
    },
    {
      value: "nano",
      label: "NANO",
      imageUrl: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/nano.png?raw=true)`,
    },
    {
      value: "dash",
      label: "DASH",
      imageUrl: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/dash.png?raw=true)`,
    },
    {
      value: "dai",
      label: "DAI",
      imageUrl: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/dai.png?raw=true)`,
    },
    {
      value: "usdt",
      label: "USDT",
      imageUrl: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/usdt.png?raw=true)`,
    },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Select
        value={selectedValue}
        onChange={handleChange}
        style={{
          backgroundColor: "#131a34",
          paddingLeft: "5px",
          borderRadius: "5px",
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            className={classes.selectOption}
            style={{ backgroundColor: "#131a34" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <ListItemIcon
                className={classes.optionIcon}
                style={{
                  backgroundImage: option.imageUrl,
                }}
              />
              <ListItemText primary={option.label} style={{ color: "white" }} />
            </div>
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default CoinsList;
