function Statement({ lang }) {
  return (
    <section className="v2-statement">
      <div className="container">
        <p className="v2-statement-text reveal">
          {lang === 'es' ? (
            <>
              Desarrollo software que resuelve{' '}
              <span className="v2-statement-highlight">problemas reales</span>{' '}
              y genera{' '}
              <span className="v2-statement-highlight">impacto</span>.
            </>
          ) : (
            <>
              I build software that solves{' '}
              <span className="v2-statement-highlight">real problems</span>{' '}
              and creates{' '}
              <span className="v2-statement-highlight">impact</span>.
            </>
          )}
        </p>
      </div>
    </section>
  );
}

export default Statement;
