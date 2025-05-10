import useAxios from 'axios-hooks';

export function useHero(id) {
    const [{ data, loading, error }, getHero] = useAxios(
        id ? `/${id}` : null, // só faz a requisição se id existir
        { manual: false }     // automática quando o hook é chamado
    );

    return {
        hero: data,
        isLoading: loading,
        getHero,
        error,
    };
}
