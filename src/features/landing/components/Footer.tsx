const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-center">
          <p className="font-mono text-xs text-muted-foreground">
            NutriLane © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
